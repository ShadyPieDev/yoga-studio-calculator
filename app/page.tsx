'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function YogaStudioCalculator() {
  const [hourlyRate, setHourlyRate] = useState(35);
  const [numHourlyInstructors, setNumHourlyInstructors] = useState(1);
  const [classesPerDay, setClassesPerDay] = useState(5);
  const [studentsPerClass, setStudentsPerClass] = useState(8);
  const [classPrice, setClassPrice] = useState(25);

  // Adjustable Monthly Expenses
  const [rent, setRent] = useState(2200);
  const [utilities, setUtilities] = useState(1000);
  const [marketing, setMarketing] = useState(500);
  const [supplies, setSupplies] = useState(500);
  const [misc, setMisc] = useState(500);
  const [software, setSoftware] = useState(200);

  const salaryLead = 100000 / 12; // Monthly
  const hoursPerClass = 1.25;
  const hourlyInstructorCost = hourlyRate * hoursPerClass * classesPerDay * numHourlyInstructors * 30;
  const revenue = classesPerDay * studentsPerClass * classPrice * 30;
  const expenses = rent + salaryLead + hourlyInstructorCost + utilities + marketing + supplies + misc + software;
  const profit = revenue - expenses;

  return (
    <div className="grid gap-6 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Yoga Studio Financial Calculator</h1>

      <Card>
        <CardContent className="grid gap-4 pt-4">
          <div className="grid gap-2">
            <Label>Hourly Rate for Instructors</Label>
            <Select onValueChange={(v) => setHourlyRate(parseInt(v))} defaultValue={hourlyRate.toString()}>
              <SelectTrigger>{`$${hourlyRate}/hr`}</SelectTrigger>
              <SelectContent>
                {[30, 35, 40].map(rate => (
                  <SelectItem key={rate} value={rate.toString()}>{`$${rate}/hr`}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label># of Hourly Instructors</Label>
            <Slider min={0} max={6} step={1} value={[numHourlyInstructors]} onValueChange={([v]) => setNumHourlyInstructors(v)} />
            <div>{numHourlyInstructors} instructor(s)</div>
          </div>

          <div className="grid gap-2">
            <Label>Classes Per Day</Label>
            <Slider min={2} max={10} step={1} value={[classesPerDay]} onValueChange={([v]) => setClassesPerDay(v)} />
            <div>{classesPerDay} class(es) daily</div>
          </div>

          <div className="grid gap-2">
            <Label>Students Per Class</Label>
            <Slider min={5} max={20} step={1} value={[studentsPerClass]} onValueChange={([v]) => setStudentsPerClass(v)} />
            <div>{studentsPerClass} students per class</div>
          </div>

          <div className="grid gap-2">
            <Label>Class Price ($)</Label>
            <Slider min={25} max={40} step={1} value={[classPrice]} onValueChange={([v]) => setClassPrice(v)} />
            <div>${classPrice} per student</div>
          </div>
        </CardContent>
      </Card>

      {/* Adjustable Monthly Expenses */}
      <Card>
        <CardContent className="grid gap-4 pt-4">
          <h2 className="text-xl font-semibold">Adjustable Monthly Expenses</h2>

          <div className="grid gap-2">
            <Label>Rent</Label>
            <Slider min={0} max={4000} step={100} value={[rent]} onValueChange={([v]) => setRent(v)} />
            <div>${rent.toLocaleString()}</div>
          </div>

          <div className="grid gap-2">
            <Label>Utilities</Label>
            <Slider min={0} max={1000} step={50} value={[utilities]} onValueChange={([v]) => setUtilities(v)} />
            <div>${utilities.toLocaleString()}</div>
          </div>

          <div className="grid gap-2">
            <Label>Marketing</Label>
            <Slider min={0} max={2000} step={50} value={[marketing]} onValueChange={([v]) => setMarketing(v)} />
            <div>${marketing.toLocaleString()}</div>
          </div>

          <div className="grid gap-2">
            <Label>Supplies</Label>
            <Slider min={0} max={5000} step={100} value={[supplies]} onValueChange={([v]) => setSupplies(v)} />
            <div>${supplies.toLocaleString()}</div>
          </div>

          <div className="grid gap-2">
            <Label>Miscellaneous</Label>
            <Slider min={0} max={2000} step={100} value={[misc]} onValueChange={([v]) => setMisc(v)} />
            <div>${misc.toLocaleString()}</div>
          </div>

          <div className="grid gap-2">
            <Label>Software/Tools</Label>
            <Slider min={0} max={1000} step={50} value={[software]} onValueChange={([v]) => setSoftware(v)} />
            <div>${software.toLocaleString()}</div>
          </div>
        </CardContent>
      </Card>

      {/* FINANCIAL SUMMARY */}
      <Card>
        <CardContent className="grid md:grid-cols-2 gap-8 pt-4">
          {/* Monthly Summary */}
          <div>
            <h2 className="text-xl font-semibold">Monthly Summary</h2>
            <div>Revenue: ${revenue.toLocaleString()}</div>
            <div>Expenses: ${expenses.toLocaleString()}</div>
            <div className={profit >= 0 ? "text-green-600" : "text-red-600"}>
              Profit: ${profit.toLocaleString()}
            </div>
          </div>

          {/* Annual Summary */}
          <div>
            <h2 className="text-xl font-semibold">Annual</h2>
            <div>Revenue: ${(revenue * 12).toLocaleString()}</div>
            <div>Expenses: ${(expenses * 12).toLocaleString()}</div>
            <div className={(profit * 12) >= 0 ? "text-green-600" : "text-red-600"}>
              Profit: ${(profit * 12).toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
  }