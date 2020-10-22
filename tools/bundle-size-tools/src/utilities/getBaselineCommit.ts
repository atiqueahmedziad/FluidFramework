/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { execSync } from 'child_process';

/**
 * Gets the commit in main that the current branch is based on.
 */
export function getBaselineCommit(): string {
  return execSync('git merge-base origin/main HEAD').toString().trim();
}