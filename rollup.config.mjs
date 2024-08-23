import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";
import json from "@rollup/plugin-json";
import copy from 'rollup-plugin-copy';

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
    contentBase: ["./dist"],
    host: "0.0.0.0",
    port: 5000,
    allowCrossOrigin: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
};

const plugins = [
    nodeResolve({}),
    commonjs(),
    typescript(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // Schließt node_modules von der Babel-Transpilation aus
      presets: [
        ['@babel/preset-env', { targets: "defaults" }]
      ],
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-decorators',
      ]
    }),
    terser(), // optional, minimiert das Bundle
    dev && serve(serveopts)
  ];

export default [
    {
        context: 'this',
        input: "src/my-harmony-card.ts",
        output: {
            dir: "dist",
            format: "es",
        },
        plugins: [...plugins],
    },
];
