import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const config = {
	input: 'src/index.js',
	output: [
		{
			file: pkg.main,
			format: 'esm'
		}
	],
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
};

export default config;
