import { useEffect, useState } from "react";
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/firebase'

export function useFavoritesListener(uid?: string) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (!uid) return;

    const ref = doc(db, "favorite", uid);
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.exists()) {
        setFavorites(snapshot.data().cryptos || [])
      } else {
        setFavorites([])
      }
    });

    return () => unsubscribe()
  }, [uid])

  return favorites
}






