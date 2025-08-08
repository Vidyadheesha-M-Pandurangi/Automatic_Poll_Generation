---
sidebar_position: 6
---

# Folder Structure

```
backend/
|-- Dockerfile
|-- firebase.json
|-- package.json
|-- plopfile.cjs
|-- pnpm-lock.yaml
|-- scripts
|   `-- class-transformer-0.5.1.patch.js
|-- src
|   |-- bootstrap
|   |   `-- loadModules.ts
|   |-- config
|   |   |-- app.ts
|   |   |-- db.ts
|   |   |-- index.ts
|   |   |-- sentry.ts
|   |   |-- smtp.ts
|   |-- container.ts
|   |-- Dockerfile-all.yml
|   |-- Dockerfile.yml
|   |-- index.ts
|   |-- inversify-adapter.ts
|   |-- modules
|   |   |-- auth
|   |   |   |-- classes
|   |   |   |   |-- index.ts
|   |   |   |   |-- transformers
|   |   |   |   |   |-- index.ts
|   |   |   |   |   `-- User.ts
|   |   |   |   `-- validators
|   |   |   |       |-- AuthValidators.ts
|   |   |   |       `-- index.ts
|   |   |   |-- container.ts
|   |   |   |-- controllers
|   |   |   |   |-- AuthController.ts
|   |   |   |   `-- index.ts
|   |   |   |-- index.ts
|   |   |   |-- interfaces
|   |   |   |   |-- IAuthService.ts
|   |   |   |   `-- index.ts
|   |   |   |-- services
|   |   |   |   |-- FirebaseAuthService.ts
|   |   |   |   `-- index.ts
|   |   |   |-- tests
|   |   |   |   `-- AuthController.test.ts
|   |   |   `-- types.ts
|   |   |-- genai
|   |   |   |-- classes
|   |   |   |   `-- validators
|   |   |   |       `-- QuestionGenValidators.ts
|   |   |   |-- container.ts
|   |   |   |-- GenAIVideoController.ts
|   |   |   |-- index.ts
|   |   |   |-- schemas
|   |   |   |   |-- DES.ts
|   |   |   |   |-- index.ts
|   |   |   |   |-- NAT.ts
|   |   |   |   |-- OTL.ts
|   |   |   |   |-- SML.ts
|   |   |   |   `-- SOL.ts
|   |   |   |-- services
|   |   |   |   |-- AIContentService.ts
|   |   |   |   |-- AudioService.ts
|   |   |   |   |-- CleanupService.ts
|   |   |   |   |-- TranscriptionService.ts
|   |   |   |   `-- VideoService.ts
|   |   |   |-- types.ts
|   |   |   `-- utils
|   |   |       |-- cleanTranscriptLines.ts
|   |   |       |-- extractJSONFromMarkdown.ts
|   |   |       `-- performCleanup.ts
|   |   |-- livequizzes
|   |   |   |-- container.ts
|   |   |   |-- controllers
|   |   |   |   |-- DashboardController.ts
|   |   |   |   `-- PollRoomController.ts
|   |   |   |-- index.ts
|   |   |   |-- interfaces
|   |   |   |   `-- PollRoom.ts
|   |   |   |-- services
|   |   |   |   |-- DashboardService.ts
|   |   |   |   |-- PollService.ts
|   |   |   |   `-- RoomService.ts
|   |   |   |-- tests
|   |   |   |   |-- DashboardController.test.ts
|   |   |   |   |-- LiveQuizzesSocket.test.ts
|   |   |   |   `-- PollRoomController.test.ts
|   |   |   |-- types.ts
|   |   |   |-- utils
|   |   |   |   `-- PollSocket.ts
|   |   |   `-- validators
|   |   |       |-- CreatePollValidator.ts
|   |   |       `-- CreateRoomValidator.ts
|   |   `-- users
|   |       |-- classes
|   |       |   |-- index.ts
|   |       |   |-- transformers
|   |       |   |   `-- Anamoly.ts
|   |       |   `-- validators
|   |       |       |-- AnamolyValidators.ts
|   |       |       |-- index.ts
|   |       |       `-- UserValidators.ts
|   |       |-- container.ts
|   |       |-- controllers
|   |       |   `-- UserController.ts
|   |       |-- index.ts
|   |       |-- services
|   |       |   `-- UserService.ts
|   |       `-- types.ts
|   |-- shared
|   |   |-- classes
|   |   |   `-- BaseService.ts
|   |   |-- constants
|   |   |   `-- transformerConstants.ts
|   |   |-- database
|   |   |   |-- index.ts
|   |   |   |-- interfaces
|   |   |   |   |-- IDatabase.ts
|   |   |   |   |-- index.ts
|   |   |   |   `-- IUserRepository.ts
|   |   |   |-- models
|   |   |   |   |-- Room.ts
|   |   |   |   `-- User.ts
|   |   |   `-- providers
|   |   |       |-- index.ts
|   |   |       `-- mongo
|   |   |           |-- index.ts
|   |   |           |-- MongoDatabase.ts
|   |   |           `-- repositories
|   |   |               |-- index.ts
|   |   |               `-- UserRepository.ts
|   |   |-- functions
|   |   |   |-- authorizationChecker.ts
|   |   |   |-- currentUserChecker.ts
|   |   |   |-- generateOpenApiSpec.ts
|   |   |   `-- index.ts
|   |   |-- index.ts
|   |   |-- interfaces
|   |   |   |-- index.ts
|   |   |   |-- models.ts
|   |   |   `-- quiz.ts
|   |   `-- middleware
|   |       |-- corsHandler.ts
|   |       |-- errorHandler.ts
|   |       |-- index.ts
|   |       |-- loggingHandler.ts
|   |       `-- rateLimiter.ts
|   |-- types.ts
|   `-- utils
|       |-- env.ts
|       |-- index.ts
|       |-- logDetails.ts
|       `-- to-bool.ts
|-- tsconfig.json
|-- typedoc.json
|-- uploads
`-- vite.config.ts
``` 

