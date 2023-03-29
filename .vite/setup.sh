#!/bin/bash
# After 5 seconds, turn Vite ports to public and show no command output on CLI
sleep 5
if [ -n "$CODESPACES" ]; then
    gh codespace ports visibility 5173:public -c $CODESPACE_NAME > /dev/null 2>&1
    gh codespace ports visibility 8000:public -c $CODESPACE_NAME > /dev/null 2>&1
else
    echo "CODESPACES environment variable is not set"
fi
#
# This script is intended to be used only in Browser cloud environment,
# because of a issue involving bad handled preflight requests when
# the port is private from Github and Gitpod parts.
# @see https://github.com/community/community/discussions/15351