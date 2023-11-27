module.exports = {
  trailingComma: "es5",
  semi: false,
  printWidth: 90,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/app/lib/(.*)$",
    "^@/app/ui/(.*)$",
    "^@/app/(.*)$",
    "^[./]",
  ],
  plugins: ["prettier-plugin-tailwindcss", "@ianvs/prettier-plugin-sort-imports"],
}
