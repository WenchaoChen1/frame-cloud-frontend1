interface initialStateType {
  currentUser?: API.CurrentUser | undefined;
}

interface routeItemType {
  name: string;
  path: string;
  icon?: string;
  routes?: routeItemType[];
}

export default function access(initialState: initialStateType) {
  const { currentUser } = initialState ?? {};
  const permission = currentUser?.permission || [];

  return {
    // develop super admin
    canAdmin: currentUser && currentUser?.accountType === '0',
    // normalRouteFilter: (route: any) => currentUser?.permission.includes(route.name),
    normalRouteFilter: (route: routeItemType) => {
      // return true;
      // develop super admin
      if (currentUser?.accountType === '0') {
        return true;
      }

      // console.log('normalRouteFilter', permission, route.path, permission.includes(route.path));
      return permission.includes(route.path);
    }
  };
}
