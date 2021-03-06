/**
 * @class DummyWithSharedDataRuntimeBehavior
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.DummyWithSharedDataRuntimeBehavior = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);

    // Here you can access to the behavior data (JSON declared in JsExtension.js)
    // using behaviorData.content:
    this._textToSet = behaviorData.content.property1;

    // You can also access to the shared data:
    var sharedData = runtimeScene.getInitialSharedDataForBehavior(behaviorData.name);
    this._textToSet = sharedData.content.sharedProperty1;

    // You can also run arbitrary code at the creation of the behavior:
    console.log("DummyWithSharedDataRuntimeBehavior was created for object:", owner);
    console.log("The shared data are:", sharedData);
};

gdjs.DummyWithSharedDataRuntimeBehavior.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.DummyWithSharedDataRuntimeBehavior.thisIsARuntimeBehaviorConstructor = "MyDummyExtension::DummyBehaviorWithSharedData";

gdjs.DummyWithSharedDataRuntimeBehavior.prototype.onDeActivate = function() {
};

gdjs.DummyWithSharedDataRuntimeBehavior.prototype.doStepPreEvents = function(runtimeScene) {
    // This is run at every frame, before events are launched.
    this.owner.getVariables().get("VariableSetFromBehavior").setString(this._textToSet);
};

gdjs.DummyWithSharedDataRuntimeBehavior.prototype.doStepPostEvents = function(runtimeScene) {
    // This is run at every frame, after events are launched.
};
