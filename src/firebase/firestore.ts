import { db } from './firebase'
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove  } from 'firebase/firestore'


export const addCoinToFavorites = async (userId: string, coinId: string) => {
  try {
    const docRef = doc(db, 'favorite', userId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        cryptos: arrayUnion(coinId),
        updatedAt: new Date()
      })
    } else {
      await setDoc(docRef, {
        cryptos: [coinId],
        updatedAt: new Date()
      })
    }
  } catch (error) {
    console.error('Error adding coin to favorites:', error)
  }
}

export const deleteCoinFromFavorites = async (userId: string, coinId: string) => {
  try {
    const docRef = doc(db, 'favorite', userId)
    await updateDoc(docRef, {
      cryptos: arrayRemove(coinId),
      updatedAt: new Date()
    })

    console.log('Coin removed from favorites successfully')
  } catch (error) {
    console.error('Error removing coin from favorites:', error)
  }
}

export const getUserFavorites = async (userId: string) => {
  try {
    const docRef = doc(db, 'favorite', userId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data().cryptos || []
    }
    return []
  } catch (error) {
    console.error('Error fetching user favorites:', error)
    return []
  }
}