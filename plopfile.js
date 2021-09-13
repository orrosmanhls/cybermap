module.exports = (plop) => {
  plop.setGenerator("feature", {
    description: "Create a feature",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your feature name?",
      },
    ],
    actions: [
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/features/{{kebabCase name}}/components/replace-with-components",
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/features/{{kebabCase name}}/pages/replace-with-pages",
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/features/{{kebabCase name}}/{{kebabCase name}}.api.ts",
        // Handlebars template used to generate content of new file
        templateFile: "templates/api.ts.hbs",
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/features/{{kebabCase name}}/{{kebabCase name}}.types.ts",
        // Handlebars template used to generate content of new file
        templateFile: "templates/types.ts.hbs",
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/features/{{kebabCase name}}/{{kebabCase name}}.utils.ts",
        // Handlebars template used to generate content of new file
        templateFile: "templates/utils.ts.hbs",
      },
    ],
  });

  plop.setGenerator("component", {
    description: "Create a component",
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: "input",
        // Variable name for this input
        name: "name",
        // Prompt to display on command line
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        // Handlebars template used to generate content of new file
        templateFile: "templates/component.tsx.hbs",
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        // Handlebars template used to generate content of new file
        templateFile: "templates/test.tsx.hbs",
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/components/{{pascalCase name}}/styles.ts",
        // Handlebars template used to generate content of new file
        templateFile: "templates/styles.ts.hbs",
      },
      {
        // Add a new file
        type: "add",
        // Path for the new file
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        // Handlebars template used to generate content of new file
        templateFile: "templates/stories.tsx.hbs",
      },
    ],
  });
};
