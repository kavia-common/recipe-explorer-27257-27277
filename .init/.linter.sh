#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-27257-27277/app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

