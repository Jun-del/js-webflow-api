/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const OrderPurchasedItemVariantImage: core.serialization.ObjectSchema<
    serializers.OrderPurchasedItemVariantImage.Raw,
    Webflow.OrderPurchasedItemVariantImage
> = core.serialization.object({
    url: core.serialization.string().optional(),
    file: core.serialization.lazyObject(async () => (await import("..")).OrderPurchasedItemVariantImageFile).optional(),
});

export declare namespace OrderPurchasedItemVariantImage {
    interface Raw {
        url?: string | null;
        file?: serializers.OrderPurchasedItemVariantImageFile.Raw | null;
    }
}