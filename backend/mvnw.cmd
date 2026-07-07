@echo off
where mvn >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  mvn %*
  exit /b %ERRORLEVEL%
)
echo Apache Maven is required to run this project. Install Maven or use the Docker build.
exit /b 1
