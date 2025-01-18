import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

export const AuthButtons = () => {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <div className="flex size-16 items-center justify-center border-x border-gray-700 hover:bg-lineGray cursor-pointer">
            <span>Sign In</span>
          </div>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="flex size-16 items-center justify-center border-x border-gray-700 hover:bg-lineGray cursor-pointer">
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
