/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Webflow from "../../../../../../api";
import * as core from "../../../../../../core";

export const BulkCollectionItemFieldData: core.serialization.ObjectSchema<
    serializers.collections.BulkCollectionItemFieldData.Raw,
    Webflow.collections.BulkCollectionItemFieldData
> = core.serialization.object({
    name: core.serialization.string().optional(),
    slug: core.serialization.string().optional(),
});

export declare namespace BulkCollectionItemFieldData {
    interface Raw {
        name?: string | null;
        slug?: string | null;
    }
}