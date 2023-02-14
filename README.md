# SCHOOLOGY AUTOCOMPLETE REACT-FRONTEND

## EXPLANAITION
This is an conponent created with REACTJS to suggest words while user is typing

### ASSETS
 - NODE 18
 - NPM 
 - REACTJS W/ TYPESCRIPT

### REQUIREMENTS | PRE-REQUIESITES
 - DOCKER and DOCKER-COMPOSE

### INSTALATION & EXECUTION
1. Download the repository
2. Open the terminal on the root folder of the project
3. execute the command
```bash
docker-compose up -d
```

* As it run on 3000 port, make sure that this port is available
* As it depends on the backend service, make sure the service is running on http://localhost:8000

### USE
* To access the service, use the url below
http://localhost:3000

### TESTS
* To run the tests, just enter the docker container with interactive terminal 
```bash
docker exec -it schautocompletefe bash
```

and call for the tests
```bash
npm test
```