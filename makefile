.PHONY: build serve serve-prod build-prod serve-staging build-staging

# VARIABLES
#BUILD=npm run-script build
BUILD=npm run build
S3=aws s3 sync build/
PROD=s3://health-hub
STAGING=s3://health-hub-staging
SYNC_PROD=${S3} ${PROD}
SYNC_STAGING=${S3} ${STAGING}

# COMMANDS
# Build
build:
	${BUILD}

# Server Management
serve:
	npm start
serve-prod:
	${BUILD} && ${SYNC_PROD}
build-prod: serve-prod
serve-staging:
	${BUILD} && ${SYNC_STAGING}
build-staging: serve-staging
