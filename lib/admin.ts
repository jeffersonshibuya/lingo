import { auth } from "@clerk/nextjs/server"

const adminIds = [
  "user_2fvFrOXemCrL5yKGpaeFnM84zkD"
]

export const isAdmin = async () => {
  const { userId } = auth()

  if(!userId) return false

  return adminIds.includes(userId)
}