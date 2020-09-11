import { User } from '../pages/Contact/contexts/UserContext'
export function filterRoutes(routes: any): { path: string; label: string }[] {
  return routes.map((item: any) => {
    return {
      path: item.link ? item.link : item.path,
      label: item.label,
    }
  })
}

export function filterUser(info: any): User {
  const { user } = info
  if (!user) {
    return {
      uid: '', //info.uid,
      // displayName: info.displayName,
      // email: info.email,
      // phoneNumber: info.phoneNumber,
      // photoURL: info.photoURL,
    }
  }
  console.log('filterUser', info)
  const { displayName, email, uid, phoneNumber, photoURL } = user
  return { displayName, email, uid, phoneNumber, photoURL }
}
