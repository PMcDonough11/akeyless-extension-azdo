const tl = require('azure-pipelines-task-lib/task');

const fetchAndValidateInput = () => {
  const params = {
    accessId: tl.getInput('accessId', true),
    azureJwt: tl.getInput('azureJwt', true),
    staticSecrets: tl.getInput('staticSecrets'),
    dynamicSecrets: tl.getInput('dynamicSecrets'),
    exportSecretsToOutputs: tl.getBoolInput('exportSecretsToOutputs'),
    exportSecretsToEnvironment: tl.getBoolInput('exportSecretsToEnvironment'),
    parseDynamicSecrets: tl.getBoolInput('parseDynamicSecrets')
  };

  // required inputs
  if (!params['accessId']) {
    throw new Error('You must provide the access id for your auth method via the accessId input');
  }

  if (!params['azureJwt']) {
    throw new Error('You must provide a JWT token for Azure authentication, this is generated by a Service connection and Azure CLI.');
  }

  // // if staticSecrets is defined, make sure it has a valid structure
  // if (params['staticSecrets']) {
  //   try {
  //     const parsed = JSON.parse(staticSecrets);

  //     if (parsed.constructor !== Object) {
  //       throw new Error(`Input 'staticSecrets' did not contain a valid JSON dictionary`);
  //     }
  //     params[paramKey] = parsed;
  //   } catch (e) {
  //     if (e instanceof SyntaxError) {
  //       throw new Error(`Input 'staticSecrets' did not contain valid JSON`);
  //     } else {
  //       throw e;
  //     }
  //   }
  // }

  // // if dynamicSecrets is defined, make sure it has a valid structure
  // if (params['dynamicSecrets']) {
  //   try {
  //     const parsed = JSON.parse(dynamicSecrets);

  //     if (parsed.constructor !== Object) {
  //       throw new Error(`Input 'dynamicSecrets' did not contain a valid JSON dictionary`);
  //     }
  //     params[paramKey] = parsed;
  //   } catch (e) {
  //     if (e instanceof SyntaxError) {
  //       throw new Error(`Input 'dynamicSecrets' did not contain valid JSON`);
  //     } else {
  //       throw e;
  //     }
  //   }
  // }

  return params;
};

exports.fetchAndValidateInput = fetchAndValidateInput;
