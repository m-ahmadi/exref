AbstractWorker.onerror

Worker extends EventTarget, implements AbstractWorker
Worker.onmessage
Worker.onmessageerror
Worker.postMessage(message={}|[], ?transfer=[]);
Worker.terminate()
'message|messageerror|rejectionhandled|unhandledrejection'

SharedWorker extends EventTarget, implements AbstractWorker

WorkerGlobalScope extends EventTarget, implements WindowOrWorkerGlobalScope, WindowEventHandlers
WorkerGlobalScope.self
WorkerGlobalScope.navigator
WorkerGlobalScope.location
WorkerGlobalScope.performance
WorkerGlobalScope.console
WorkerGlobalScope.importScripts()

DedicatedWorkerGlobalScope extends WorkerGlobalScope

SharedWorkerGlobalScope extends WorkerGlobalScope

ServiceWorkerGlobalScope extends WorkerGlobalScope

WorkerLocation
WorkerNavigator

mixin WindowOrWorkerGlobalScope <- Window, WorkerGlobalScope
WindowOrWorkerGlobalScope.caches
WindowOrWorkerGlobalScope.indexedDB
WindowOrWorkerGlobalScope.isSecureContext
WindowOrWorkerGlobalScope.origin
WindowOrWorkerGlobalScope.atob()
WindowOrWorkerGlobalScope.btoa()
WindowOrWorkerGlobalScope.clearInterval()
WindowOrWorkerGlobalScope.clearTimeout()
WindowOrWorkerGlobalScope.createImageBitmap()
WindowOrWorkerGlobalScope.fetch()
WindowOrWorkerGlobalScope.setInterval()
WindowOrWorkerGlobalScope.setTimeout()