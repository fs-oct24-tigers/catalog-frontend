import { Table, TableHeader } from '@/components/ui/table';

export const ProductAbout = () => {
  return (
    <div className="flex flex-col lg:w-[559px] items-start ">
      <div className="text-[22px] font-extrabold text-textWhite pt-[9px]">
        About
      </div>
      <Table>
        <TableHeader>
          <tr>
            <td colSpan={2}>
              <div className="h-0.5 bg-lineGray mt-[23px] mb-[32px]" />
            </td>
          </tr>
        </TableHeader>
      </Table>

      <div className="text-xl font-bold text-textWhite mb-4">
        And then there was Pro
      </div>

      <div className="text-sm font-semibold text-textGray mb-8">
        A transformative triple‑camera system that adds tons of capability
        without complexity. An unprecedented leap in battery life..
      </div>

      <div className="text-sm font-semibold text-textGray">
        An unprecedented leap in battery life. And a mind‑blowing chip that
        doubles down on machine learning and pushes the boundaries of what a
        smartphone can do. Welcome to the first iPhone powerful enough to be
        called Pro.
      </div>

      <div className="text-xl font-bold text-textWhite mt-8 mb-4">Camera</div>

      <div className="text-sm font-semibold text-textGray">
        Meet the first triple‑camera system to combine cutting‑edge technology
        with the legendary simplicity of iPhone. Capture up to four times more
        scene. Get beautiful images in drastically lower light. Shoot the
        highest‑quality video in a smartphone — then edit with the same tools
        you love for photos. You’ve never shot with anything like it.
      </div>

      <div className="text-xl font-bold text-textWhite mt-8 mb-4">
        Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love
        it.
      </div>

      <div className="text-sm fond-semibold text-textGray">
        iPhone 11 Pro lets you capture videos that are beautifully true to life,
        with greater detail and smoother motion. Epic processing power means it
        can shoot 4K video with extended dynamic range and cinematic video
        stabilization — all at 60 fps. You get more creative control, too, with
        four times more scene and powerful new editing tools to play with.
      </div>
    </div>
  );
};
