#!/bin/sh

GREEN='\033[0;32m'
RED='\033[0;31m'

echo $(pwd)

if [ -d "$(pwd)/.git" ] && [ ! -d "$(pwd)/.husky" ]; then
    npx husky init

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Husky successfully initialized!"

        echo 'npx --no-install commitlint --edit "$1"' > .husky/commit-msg
        echo "npx --no-install lint-staged" > .husky/pre-commit

        if [ $? -eq 0 ]; then
            echo -e "${GREEN}Husky commitlint successfully created!"
        else
            echo -e "${RED}There was an issue creating the Husky commitlint pre-commit hook."
        fi
    else
        echo -e "${RED}There was an error installing Husky. Try installing it after the package is created."
    fi
fi
