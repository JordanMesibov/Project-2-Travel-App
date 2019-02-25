# Project-2-Travel-App


## Overview

Sometime, it can be hard for a group of people to decide on a location for a group vacation. We wanted to code a way for a group to reach a great decision that hopefully makes the most people as happy as possible. Here!, this is a solution calls a **Sonder project**

This application allows users to create a vacation group or event. After that, user will input vacation options (ie cities) for members to vote on and rank on a scale from 1-10. It simulates an instant runoff election using this data to give the group a winning city.

### Instructions

1. Users have to sign-up before using the ** Sonder app**. Then log-in to the main page.
2. Create a group name.
3. User(who create a group) will choose five different vacation locations and add another user to a group.
4. Users (who does not create a group) can join many groups that they want.
5. Everyone (who join in the group) can vote the location lists into 1-10 score.
6. If the lists have vote less than 50% of all the vote. That list will eliminate from the location list.
7. User(who create a group) will see the result after everyone voted.

# Heroku link:
https://young-shore-67305.herokuapp.com/

# Video.gif show:

![travel](https://user-images.githubusercontent.com/45270593/53311293-55524300-387e-11e9-8996-12da3dd3b109.gif)


# Powerpoint Presentation:

https://docs.google.com/presentation/d/1Uu0Qsff-4Pv4DPyunRvymV9H6pKMfbm-x_yLetRPMl0/edit#slide=id.g1f87997393_0_848


# Inside the Sonder project

## Web side flow chart

![sonder11](https://user-images.githubusercontent.com/45270593/53307421-62633800-3866-11e9-9e9c-e88758e8786b.png)


 Sing-up and log-in page.

![sonder](https://user-images.githubusercontent.com/45270593/53306562-9e919b00-385c-11e9-9657-1ce8bc3dd520.png)

This webpage uses Passport `npm passport`, that is Express-compatible authentication middleware for Node.js. The Passport can only match a username/ID and password. Then we use `npm bcrypt` for salting and hashing a readble password to different word.

> For example; If two user inputs the same password on the sign-up page when someone console.log(password), it will show in a different platform. 

![sonder6](https://user-images.githubusercontent.com/45270593/53306911-021dc780-3861-11e9-9592-215e946e835c.png)

## After user log-in

User can create a new group and add other users to join there group.

![sonder2](https://user-images.githubusercontent.com/45270593/53307345-85411c80-3865-11e9-9ffc-44e698dd3fb1.png)

Create four groups of data users, groups, usergroup, and vacation options.


![sonder7](https://user-images.githubusercontent.com/45270593/53307422-62633800-3866-11e9-9be0-d81f47d0903a.png)

Backend routes

![sonder8](https://user-images.githubusercontent.com/45270593/53307423-62633800-3866-11e9-9c6a-a2f679eee64c.png)


![sonder9](https://user-images.githubusercontent.com/45270593/53307424-62633800-3866-11e9-8a5d-701f72282eb2.png)


![sonder10](https://user-images.githubusercontent.com/45270593/53307425-62633800-3866-11e9-9866-48fc387b5e6f.png)



# Features to complete/enhance for future development

- Complete Axios implementation in back end instead of front end with cdn library.
- Integrate proper use of handlebars.
- Group presence with a message board.
- Implement the ranked voting system to generate winner and store into website.
- Implement confidence value system.
- Create sister site(s) that uses ranked voting system to take in queries and help groups decide on things such as where to eat or what to buy.

# Youtube version

[![Watch the video](https://img.youtube.com/vi/jEjWFU0Whdc/default.jpg)](https://youtu.be/jEjWFU0Whdc)

# Thank you for reading.

