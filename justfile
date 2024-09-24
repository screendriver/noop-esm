default:
	@just --list

@compile:
	npx tsc

@check-exports:
	npx attw --pack . --ignore-rules=cjs-resolves-to-esm

test:
	npx just check-exports

build:
	npx just compile
