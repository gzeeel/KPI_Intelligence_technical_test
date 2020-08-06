# ##########################################
#      KPI_Intelligence_technical_test
# ##########################################
KPI Intelligence Technical test with NodeJS / Angular 8

Author: Everaert Anthony

# ##########################################
#               Versions Used
# ##########################################
Angular CLI                        8.3.8
Node                               10.16.3
Angular                            8.2.10
@angular-devkit/architect          0.803.8
@angular-devkit/build-angular      0.803.24
@angular-devkit/build-optimizer    0.803.24
@angular-devkit/build-webpack      0.803.24
@angular-devkit/core               8.3.8
@angular-devkit/schematics         8.3.8
@angular/cdk                       8.2.3
@angular/cli                       8.3.8
@angular/material                  8.2.3
@angular/material-moment-adapter   10.1.2
@ngtools/webpack                   8.3.24
@schematics/angular                8.3.8
@schematics/update                 0.803.8
rxjs                               6.4.0
typescript                         3.5.3
webpack                            4.39.2


# ##########################################
#           Repository structure
# ##########################################

/backend            root of the backend server (NodeJS app)
/web-app            root of the uncompiled Angular web app
/web-app/dist       folder containing the compiled Angular web app


# ##########################################
#            NodeJS Installation
# ##########################################
This project has been built with NodeJS v10.16.3

You can find the installation package for this version by following the link below, or try to launch the app with your actual installed version and cross the fingers ;)

> https://nodejs.org/dist/v10.16.3/


# ##########################################
#  Running the backend server (NodeJS app)
# ##########################################
1. Make sur the port 3000 isn't used by your server/computer by running the command bellow :
(Linux)     > netstat -tulpn
(Windows)   > netstat -an

2. If the port 3000 is used, kill the process if possible, else, change the port used by the NodeJS backend server in 
<Repository>/backend/main.js (line 6)

3. Open a terminal and get into the backend directory

4. launch the backend server with the command bellow :
> node main.js

5. You should get the following log when the server is running :
"Backend server running and listening on port 3000"


# ##########################################
#   Angular Web App Installation / Launch
# ##########################################
1. Make sure you have any http server running (Apache as example)

2. Copy/Paste the /web-app/dist content to the webroot of your http server

3. Everything should be good. Access the Web App through http://localhost:<http port>


# ##########################################
#                Troubleshot
# ##########################################
Feel free to get in touch with me if any problem occurs during the installation or running phase:

> everaert.anthony@gmail.com
> 06 64 32 85 23