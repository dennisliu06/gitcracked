import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  
  console.log(id)
  let { data: problems, error } = await supabase.from('problems').select('*');

    

  if (error ) {
    return NextResponse.json({ message: error.message }, {
      status: 400
    })
  }
  
  if (!problems || problems.length === 0) {
    return NextResponse.json({ message: "Problem not found" }, { status: 404 });
  }

  const problem = problems[0]
  return NextResponse.json(problem, { status: 200 });


}
