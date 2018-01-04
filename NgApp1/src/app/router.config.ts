/*Sample code taken from https://github.com/ui-router/sample-app-angular/tree/master/src/app*/
import { UIRouter, Category } from '@uirouter/core';
//import { Visualizer } from '@uirouter/visualizer';

//import { googleAnalyticsHook } from './util/ga';
//import { requiresAuthHook } from './global/auth.hook';

export function routerConfigFn(router: UIRouter) {
  //const transitionService = router.transitionService;
  //requiresAuthHook(transitionService);
  //googleAnalyticsHook(transitionService);

  //router.trace.enable(Category.TRANSITION);
  // router.plugin(Visualizer);
  router.urlService.rules.otherwise({ state: "main.home" });
}
