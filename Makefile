nuxt = docker-compose run --rm nuxt

.PHONY: init
init:
	docker-compose build
	@make init_node
	@make init_firebase

.PHONY: init_node
init_node:
	$(nuxt) npm i

.PHONY: init_firebase
init_firebase:
	cd firebase/functions && \
	npm i

.PHONY: deploy
deploy:
	$(nuxt) npm run generate && \
	firebase deploy --only hosting

.PHONY: deploy_all
deploy_all:
	$(nuxt) npm run generate && \
	firebase deploy
