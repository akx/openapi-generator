(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{288:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return j}));var n=a(1),b=a(9),l=(a(0),a(302)),r={title:"Config Options for javascript-closure-angular",sidebar_label:"javascript-closure-angular"},c={id:"generators/javascript-closure-angular",title:"Config Options for javascript-closure-angular",description:"| Option | Description | Values | Default |",source:"@site/../docs/generators/javascript-closure-angular.md",permalink:"/docs/generators/javascript-closure-angular",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/generators/javascript-closure-angular.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1597941326,sidebar_label:"javascript-closure-angular"},O=[{value:"IMPORT MAPPING",id:"import-mapping",children:[]},{value:"INSTANTIATION TYPES",id:"instantiation-types",children:[]},{value:"LANGUAGE PRIMITIVES",id:"language-primitives",children:[]},{value:"RESERVED WORDS",id:"reserved-words",children:[]},{value:"FEATURE SET",id:"feature-set",children:[{value:"Client Modification Feature",id:"client-modification-feature",children:[]},{value:"Data Type Feature",id:"data-type-feature",children:[]},{value:"Documentation Feature",id:"documentation-feature",children:[]},{value:"Global Feature",id:"global-feature",children:[]},{value:"Parameter Feature",id:"parameter-feature",children:[]},{value:"Schema Support Feature",id:"schema-support-feature",children:[]},{value:"Security Feature",id:"security-feature",children:[]},{value:"Wire Format Feature",id:"wire-format-feature",children:[]}]}],i={rightToc:O};function j(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Values"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"allowUnicodeIdentifiers"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean, toggles whether unicode identifiers are allowed in names or not, default is false"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"disallowAdditionalPropertiesIfNotPresent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specify the behavior when the 'additionalProperties' keyword is not present in the OAS document. If false: the 'additionalProperties' implementation is compliant with the OAS and JSON schema specifications. If true: when the 'additionalProperties' keyword is not present in a schema, the value of 'additionalProperties' is set to false, i.e. no additional properties are allowed. Note: this mode is not compliant with the JSON schema specification. This is the original openapi-generator behavior.This setting is currently ignored for OAS 2.0 documents:  1) When the 'additionalProperties' keyword is not present in a 2.0 schema, additional properties are NOT allowed.  2) Boolean values of the 'additionalProperties' keyword are ignored. It's as if additional properties are NOT allowed.Note: the root cause are issues #1369 and #1371, which must be resolved in the swagger-parser project."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("dl",null,Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"false")),Object(l.b)("dd",null,"The 'additionalProperties' implementation is compliant with the OAS and JSON schema specifications."),Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"true")),Object(l.b)("dd",null,"when the 'additionalProperties' keyword is not present in a schema, the value of 'additionalProperties' is automatically set to false, i.e. no additional properties are allowed. Note: this mode is not compliant with the JSON schema specification. This is the original openapi-generator behavior."))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ensureUniqueParams"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether to ensure parameter names are unique in an operation (rename parameters that are not)."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hideGenerationTimestamp"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hides the generation timestamp when files are generated."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"legacyDiscriminatorBehavior"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This flag is used by OpenAPITools codegen to influence the processing of the discriminator attribute in OpenAPI documents. This flag has no impact if the OAS document does not use the discriminator attribute. The default value of this flag is set in each language-specific code generator (e.g. Python, Java, go...)using the method toModelName. Note to developers supporting a language generator in OpenAPITools; to fully support the discriminator attribute as defined in the OAS specification 3.x, language generators should set this flag to true by default; however this requires updating the mustache templates to generate a language-specific discriminator lookup function that iterates over {{#mappedModels}} and does not iterate over {{children}}, {{#anyOf}}, or {{#oneOf}}."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("dl",null,Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"true")),Object(l.b)("dd",null,"The mapping in the discriminator includes descendent schemas that allOf inherit from self and the discriminator mapping schemas in the OAS document."),Object(l.b)("dt",null,Object(l.b)("strong",{parentName:"td"},"false")),Object(l.b)("dd",null,"The mapping in the discriminator includes any descendent schemas that allOf inherit from self, any oneOf schemas, any anyOf schemas, any x-discriminator-values, and the discriminator mapping schemas in the OAS document AND Codegen validates that oneOf and anyOf schemas contain the required discriminator and throws an error if the discriminator is missing."))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"prependFormOrBodyParameters"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add form or body parameters to the beginning of the parameter list."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sortModelPropertiesByRequiredFlag"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sort model properties to place required parameters before optional parameters."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sortParamsByRequiredFlag"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sort method arguments to place required parameters before optional parameters."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"useEs6"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"use ES6 templates"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")))),Object(l.b)("h2",{id:"import-mapping"},"IMPORT MAPPING"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Imports"))),Object(l.b)("tbody",{parentName:"table"})),Object(l.b)("h2",{id:"instantiation-types"},"INSTANTIATION TYPES"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type/Alias"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Instantiated By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array")))),Object(l.b)("h2",{id:"language-primitives"},"LANGUAGE PRIMITIVES"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"Blob"),Object(l.b)("li",null,"Date"),Object(l.b)("li",null,"Object"),Object(l.b)("li",null,"boolean"),Object(l.b)("li",null,"number"),Object(l.b)("li",null,"string")),Object(l.b)("h2",{id:"reserved-words"},"RESERVED WORDS"),Object(l.b)("ul",{class:"column-ul"},Object(l.b)("li",null,"abstract"),Object(l.b)("li",null,"assert"),Object(l.b)("li",null,"break"),Object(l.b)("li",null,"byte"),Object(l.b)("li",null,"case"),Object(l.b)("li",null,"catch"),Object(l.b)("li",null,"char"),Object(l.b)("li",null,"class"),Object(l.b)("li",null,"const"),Object(l.b)("li",null,"continue"),Object(l.b)("li",null,"default"),Object(l.b)("li",null,"do"),Object(l.b)("li",null,"double"),Object(l.b)("li",null,"else"),Object(l.b)("li",null,"enum"),Object(l.b)("li",null,"extends"),Object(l.b)("li",null,"final"),Object(l.b)("li",null,"finally"),Object(l.b)("li",null,"for"),Object(l.b)("li",null,"goto"),Object(l.b)("li",null,"if"),Object(l.b)("li",null,"implements"),Object(l.b)("li",null,"import"),Object(l.b)("li",null,"instanceof"),Object(l.b)("li",null,"int"),Object(l.b)("li",null,"interface"),Object(l.b)("li",null,"new"),Object(l.b)("li",null,"package"),Object(l.b)("li",null,"private"),Object(l.b)("li",null,"protected"),Object(l.b)("li",null,"public"),Object(l.b)("li",null,"return"),Object(l.b)("li",null,"short"),Object(l.b)("li",null,"static"),Object(l.b)("li",null,"super"),Object(l.b)("li",null,"switch"),Object(l.b)("li",null,"synchronized"),Object(l.b)("li",null,"this"),Object(l.b)("li",null,"throw"),Object(l.b)("li",null,"throws"),Object(l.b)("li",null,"transient"),Object(l.b)("li",null,"try"),Object(l.b)("li",null,"void"),Object(l.b)("li",null,"while")),Object(l.b)("h2",{id:"feature-set"},"FEATURE SET"),Object(l.b)("h3",{id:"client-modification-feature"},"Client Modification Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Authorizations"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UserAgent"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MockServer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"data-type-feature"},"Data Type Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int32"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Int64"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Double"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Decimal"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Byte"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Binary"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DateTime"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"File"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maps"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CollectionFormat"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CollectionFormatMulti"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfEnum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfModel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfPrimitives"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfModel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ArrayOfCollectionOfEnum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfEnum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfModel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfPrimitives"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfModel"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MapOfCollectionOfEnum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"documentation-feature"},"Documentation Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Readme"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Model"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Api"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")))),Object(l.b)("h3",{id:"global-feature"},"Global Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Host"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasePath"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Info"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Schemes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PartialSchemes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Consumes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Produces"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ExternalDocumentation"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Examples"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XMLStructureDefinitions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MultiServer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterizedServer"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ParameterStyling"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callbacks"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LinkObjects"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"parameter-feature"},"Parameter Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Query"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Header"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Body"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FormUnencoded"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FormMultipart"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cookie"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"schema-support-feature"},"Schema Support Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simple"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Composite"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Polymorphism"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Union"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")))),Object(l.b)("h3",{id:"security-feature"},"Security Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BasicAuth"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ApiKey"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OpenIDConnect"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BearerToken"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_Implicit"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_Password"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_ClientCredentials"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAuth2_AuthorizationCode"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))),Object(l.b)("h3",{id:"wire-format-feature"},"Wire Format Feature"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Defined By"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JSON"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"XML"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2713"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PROTOBUF"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToolingExtension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u2717"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OAS2,OAS3")))))}j.isMDXComponent=!0},302:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return m}));var n=a(0),b=a.n(n);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var i=b.a.createContext({}),j=function(t){var e=b.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c({},e,{},t)),a},p=function(t){var e=j(t.components);return b.a.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},u=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,r=t.parentName,i=O(t,["components","mdxType","originalType","parentName"]),p=j(a),u=n,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return a?b.a.createElement(m,c({ref:e},i,{components:a})):b.a.createElement(m,c({ref:e},i))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,r=new Array(l);r[0]=u;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,r[1]=c;for(var i=2;i<l;i++)r[i]=a[i];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);