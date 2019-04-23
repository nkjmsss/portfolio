init:
	docker-compose build && \
	make init_node && \
	make init_firebase

init_node:
	docker-compose run --rm nuxt npm i

init_firebase:
	cd firebase/functions && \
	npm i

deploy:
	docker-compose run --rm nuxt npm run generate && \
	firebase deploy --only hosting

deploy-all:
	docker-compose run --rm nuxt npm run generate && \
	firebase deploy
