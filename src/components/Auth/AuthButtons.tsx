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
          <div className="flex grow size-16 items-center justify-center border-x dark:border-gray-700 dark:hover:bg-lineGray cursor-pointer">
            <UserIcon />
          </div>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="flex grow size-16 items-center justify-center border-l dark:border-gray-700 dark:hover:bg-lineGray cursor-pointer">
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
