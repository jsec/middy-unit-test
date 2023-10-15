#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MutStack } from '../lib/mut-stack';

const app = new cdk.App();
new MutStack(app, 'MutStack')
