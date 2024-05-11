import { BottomTabItem } from './BottomTabItem';

export function BottomTab() {
  return (
    <div className="fixed bottom-0 left-0 bg-custom-purple w-full p-4">
      <ul className="flex w-full justify-around">
        <li>
          <BottomTabItem to="/" />
        </li>
        <li>
          <BottomTabItem to="/pets" />
        </li>
        <li>
          <BottomTabItem to="/tutor" />
        </li>
      </ul>
    </div>
  );
}
