/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

export interface UserLimitReached {
    code?: "user_limit_reached";
    /** Error message */
    message?: string;
    /** Link to more information */
    externalReference?: string;
    /** Array of errors */
    details?: Webflow.ErrorDetailsItem[];
}