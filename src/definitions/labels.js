/**
 * @module gitlab-api.labels/definition
 */
 
import request from 'superagent-bluebird-promise';


/**
 * @inner
 * @summary List labels
 * @description
 *
 * `GET /projects/:id/labels`
 *
 * ```bash
 * curl -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" https://gitlab.example.com/api/v3/projects/1/labels
 * ```
 *
 * @see {@link http://doc.gitlab.com/ce/api/labels.html#list-labels|website doc} -
 *      {@link https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/api/labels.md#list-labels|repo doc}
 * 
 * @param {string}  apiBaseUrl - Base url of the gitlab api
 * @param {integer} id         - The ID of the project
 */
export const getProjectLabels = (apiBaseUrl, id) => {
    const path = `${apiBaseUrl}/projects/${id}/labels`;
    
    const req = request.get(path);
    
    return req;
};

/**
 * @inner
 * @summary Create a new label
 * @description
 *
 * `POST /projects/:id/labels`
 *
 * ```bash
 * curl --data "name=feature&color=#5843AD" -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/labels"
 * ```
 *
 * @see {@link http://doc.gitlab.com/ce/api/labels.html#create-a-new-label|website doc} -
 *      {@link https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/api/labels.md#create-a-new-label|repo doc}
 * 
 * @param {string}  apiBaseUrl    - Base url of the gitlab api
 * @param {integer} id            - The ID of the project
 * @param {object}  payload       - 
 * @param {string}  payload.name  - The name of the label
 * @param {string}  payload.color - The color of the label in 6-digit hex notation with leading # sign
 */
export const addProjectLabel = (apiBaseUrl, id, payload) => {
    const path = `${apiBaseUrl}/projects/${id}/labels`;
    
    const req = request.post(path);
    req.send(payload);
    
    return req;
};

/**
 * @inner
 * @summary Delete a label
 * @description
 *
 * `DELETE /projects/:id/labels`
 *
 * ```bash
 * curl -X DELETE -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/labels?name=bug"
 * ```
 *
 * @see {@link http://doc.gitlab.com/ce/api/labels.html#delete-a-label|website doc} -
 *      {@link https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/api/labels.md#delete-a-label|repo doc}
 * 
 * @param {string}  apiBaseUrl - Base url of the gitlab api
 * @param {integer} id         - The ID of the project
 */
export const deleteProjectLabels = (apiBaseUrl, id) => {
    const path = `${apiBaseUrl}/projects/${id}/labels`;
    
    const req = request.delete(path);
    
    return req;
};

/**
 * @inner
 * @summary Edit an existing label
 * @description
 *
 * `PUT /projects/:id/labels`
 *
 * ```bash
 * curl -X PUT --data "name=documentation&new_name=docs&color=#8E44AD" -H "PRIVATE-TOKEN: 9koXpg98eAheJpvBs5tK" "https://gitlab.example.com/api/v3/projects/1/labels"
 * ```
 *
 * @see {@link http://doc.gitlab.com/ce/api/labels.html#edit-an-existing-label|website doc} -
 *      {@link https://gitlab.com/gitlab-org/gitlab-ce/tree/master/doc/api/labels.md#edit-an-existing-label|repo doc}
 * 
 * @param {string}  apiBaseUrl       - Base url of the gitlab api
 * @param {integer} id               - The ID of the project
 * @param {object}  payload          - 
 * @param {string}  payload.name     - The name of the existing label
 * @param {string}  payload.new_name - The new name of the label
 * @param {string}  payload.color    - The new color of the label in 6-digit hex notation with leading # sign
 */
export const updateProjectLabels = (apiBaseUrl, id, payload) => {
    const path = `${apiBaseUrl}/projects/${id}/labels`;
    
    const req = request.put(path);
    
    return req;
};
