@echo off

set /p CLIENT_ID="ClientID: "
set /p CLIENT_SECRET= "ClientSecret: "
set /p REDIRECT_URI="Redicrect URI: "
set SCOPE=trading
start chrome "https://id.ctrader.com/my/settings/openapi/grantingaccess/?client_id=%CLIENT_ID%&redirect_uri=%REDIRECT_URI%&scope=%SCOPE%&product=web"

set /p CODE="Authorization Code: "
start chrome "https://openapi.ctrader.com/apps/token?grant_type=authorization_code&code=%CODE%&redirect_uri=%REDIRECT_URI%&client_id=%CLIENT_ID%&client_secret=%CLIENT_SECRET%"
