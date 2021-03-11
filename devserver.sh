#!/bin/bash

set -e

gatsby clean
gatsby develop -H 0.0.0.0 --verbose
