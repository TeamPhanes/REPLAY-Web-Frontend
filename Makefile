REGISTRY := harbor.phanescloud.com

GIT_SHA ?= $(shell git rev-parse --short HEAD)

IMAGE_NAME := frontend
IMAGE_PROJECT := replay
IMAGE_TAG := $(BRANCH)-$(GIT_SHA)
IMAGE := $(REGISTRY)/$(IMAGE_PROJECT)/$(IMAGE_NAME):$(IMAGE_TAG)

npm-install:
	npm install

npm-lint: npm-install
	npm run lint

npm-build: npm-install npm-lint
	npm run build

npm-run: next-build
	npm run start

docker-build: decrypt
	docker build --network host -t ${IMAGE} .

docker-push: docker-build
	docker push ${IMAGE}

encrypt:
	sops -e -i .env

decrypt:
	sops -d -i .env.dev