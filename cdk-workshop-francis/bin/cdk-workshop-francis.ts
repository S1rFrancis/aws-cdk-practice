#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkWorkshopFrancisStack } from '../lib/cdk-workshop-francis-stack';

const app = new cdk.App();
new CdkWorkshopFrancisStack(app, 'CdkWorkshopFrancisStack');
