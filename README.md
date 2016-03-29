# node-gitlab-client


[![Inline docs](http://inch-ci.org/github/plouc/node-gitlab-client.svg?branch=master&style=flat-square)](http://inch-ci.org/github/plouc/node-gitlab-client)

## Usage

```javascript
import labelsApi from 'gitlab-client/labels';

// init labels api client
const labels = labelsApi({
    apiBaseUrl: 'https://gitlab.example.com/api/v3',
    token:      'my_secret_token'
});

// fetch project 123 labels
labels.getProjectLabels(123)
    .then(function (res) {
        console.log(res.body);
    })
    .catch(console.error)
;
```
