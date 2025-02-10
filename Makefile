REGISTRY := harbor.phanescloud.com

npm-install:
	npm install

npm-lint: npm-install
	npm run lint

npm-build: npm-install npm-lint
	npm run build

npm-run: next-build
	npm run start

docker-build:
	docker build -t ${REGISTRY}/replay/frontend .

docker-push: docker-build
	docker push -t ${REGISTRY}/replay/frontend

buildah-build:
	buildah bud -t ${REGISTRY}/replay/frontend .

buildah-push: buildah-build
	buildah push ${REGISTRY}/replay/frontend