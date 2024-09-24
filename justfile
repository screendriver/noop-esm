default:
	@just --list

@compile:
	npx tsc

@check-exports:
	npx attw --pack . --ignore-rules=cjs-resolves-to-esm

test:
	npx just check-exports
	npx mocha --config mocha.config.json

build:
	npx just compile
