import ClassRoom from './0-classroom';

export default function initializeRooms() {
  /**
  * Creates an array of {@link ClassRoom}s with a specific size.
  * @returns An array of {@link ClassRoom}s.
  */
    return [19, 20, 34].map((size) => new ClassRoom(size));
}
