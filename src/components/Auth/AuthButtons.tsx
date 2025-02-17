import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import { UserIcon } from 'lucide-react';

export const AuthButtons = () => {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <div className="flex grow w-12 h-12 items-center justify-center border-x dark:border-gray-700 dark:hover:bg-lineGray cursor-pointer">
            <UserIcon className="text-slate-950 dark:text-textWhite" />
          </div>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="flex grow w-12 h-12 items-center justify-center border-l dark:border-gray-700 dark:hover:bg-lineGray cursor-pointer">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'w-8 h-8',
              },
            }}
          />
        </div>
      </SignedIn>
    </>
  );
};
