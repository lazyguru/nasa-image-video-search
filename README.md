# NASA Image and Video search

- [Description](#description)
- [API](#api)
- [Styling Solution or Component Library](#styling-solution-or-component-library)
- [Pages](#pages)
- [API + User Interaction](#api--user-interaction)
- [Context API](#context-api)
- [Deployment](#deployment)

## Description

App provides pages to search NASA for images or video related to a keyword

## API

* https://images-api.nasa.gov/search (same API I used for Day 5)
* If you choose a Web API and not a BaaS, does the chosen Web API:
  * [X] Supports CORS
  * [ ] Requires an API Key
  * [ ] Requires OAuth
  * [ ] Not applicable

## Styling Solution or Component Library

* Tailwind

## Pages

* Replace this list with the pages you will have in your app.

1. Home page - Contains description about the search options
1. Image search - Image based search results
1. Video search - Videos matching search results
1. History - Contains a list of the user's previously used search terms by type. User can click on the term to be taken back to that search

##  API + User Interaction

* User will enter a term and get a list of results. On the video page, user will be able to click the preview image to be taken to the video. On the History page, user will be able to click on previous search terms to relaunch that search

## Context API

* Context API will be used to keep track of the search terms a user has used by type (image vs video)

## Deployment

- [Netlify deployed site](https://sparkling-centaur-f8e356.netlify.app/)
