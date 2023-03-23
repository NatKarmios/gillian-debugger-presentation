export default function wislHighlight() {
  return {
    keywords: {
      keyword: 'return if else',
      decl: 'predicate function',
      literal: 'null nil',
    },
    contains: [
      {
        className: 'literal',
        begin: /\d+/,
        keywords: 'null nil',
      },
      {
        className: 'operator',
        begin: /:=|->|\*|==|\+/,
      },
    ],
  };
}
