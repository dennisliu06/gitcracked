import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  
  console.log(id)
  let { data: problems, error: problemsError } = await supabase
    .from('problems')
    .select('id, title, difficulty, description, constraints, hints')
    .eq('slug', id)
  if (problemsError) {
    return NextResponse.json({ message: problemsError.message }, {
      status: 400
    })
  }
  if (!problems || problems.length === 0) {
    return NextResponse.json({ message: "Problem not found" }, { status: 404 });
  }

  const problem = problems[0]
  
  let { data: examples, error: examplesError } = await supabase
    .from('problems_examples')
    .select('*')
    .eq('problem_id', problem.id)
  
  console.log(examplesError)
  if (examplesError) {
    return NextResponse.json({ message: examplesError.message }, {
      status: 400
    })
  }

  if (!examples || examples.length === 0) {
    return NextResponse.json({ message: "Problem example not found" }, { status: 404 });
  }


  console.log({...problem, examples})
  return NextResponse.json({...problem, examples}, { status: 200 });
}
