#!/usr/bin/env node

const program = require("commander");
const generateDocFromSchema = require("./lib/generator");
const path = require("path");
const os = require("os");
const GroupInfo = require("./lib/group-info");

const DEFAULT_OPTIONS = {
  schema: "./schema.graphql",
  rootPath: "./docs",
  baseURL: "schema",
  linkRoot: "/",
  homepage: path.join(__dirname, "../assets/", "generated.md"),
  diffMethod: "SCHEMA-DIFF",
  tmpDir: path.join(os.tmpdir(), "@edno/docusaurus2-graphql-doc-generator"),
  loaders: {},

  // schema: "./schema.graphql",
  // rootPath: "./generated",
  // baseURL: "api-reference/graphql",
  // linkRoot: "/",
  // homepage: path.join(__dirname, "../assets/", "generated.md"),
  // diffMethod: "SCHEMA-DIFF",
  // tmpDir: path.join(os.tmpdir(), "@edno/docusaurus2-graphql-doc-generator"),
  // loaders: {},
  // groupByDirective: '@doc(category|=common)'
};

const config = { ...DEFAULT_OPTIONS, ...{} };

program
  .name("start")
  .version("1", "-v", "--version")
  .command("graphql-to-doc")
  .option("-s, --schema <schema>", "Schema location", config.schema)
  .option(
    "-r, --root <rootPath>",
    "Root folder for doc generation",
    config.rootPath,
  )
  .option(
    "-b, --base <baseURL>",
    "Base URL to be used by Docusaurus",
    config.baseURL,
  )
  .option(
    "-l, --link <linkRoot>",
    "Root for links in documentation",
    config.linkRoot,
  )
  .option(
    "-h, --homepage <homepage>",
    "File location for doc landing page",
    config.homepage,
  )
  .option(
    "-n, --navigation <navigation>",
    "File location for navigation json structure",
    config.navigation,
  )
  .option("-f, --force", "Force document generation")
  .option("-d, --diff <diffMethod>", "Set diff method", config.diffMethod)
  .option(
    "-t, --tmp <tmpDir>",
    "Set temp dir for schema diff",
    config.tmpDir,
  )
  .option(
    "-gbd, --groupByDirective <@directive(field|=fallback)>",
    "Group Documentation By Directive",
    config.groupByDirective,
  )
  .description("Generate GraphQL Schema Documentation")
  .action(async (options) => {
    await generateDocFromSchema({
      baseURL: options.base,
      schemaLocation: options.schema,
      outputDir: path.join(options.root, options.base),
      linkRoot: options.link,
      homepageLocation: options.homepage,
      navigationLocation: options.navigation,
      diffMethod: options.force ? "FORCE" : options.diff,
      tmpDir: options.tmp,
      loaders: config.loaders,
      groupByDirective: GroupInfo.parseOption(options.groupByDirective),
    });
  });

program.parse(process.argv);
