import { AppService } from "./app.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';


describe("AppService", ()=>{

  let appService: AppService;
  let httpTestingController: HttpTestingController;
  //above line is to provide test data to the service. 

  beforeEach(()=>{


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      //HttpClientTestingModule is to create a mock httpClient(this will not make any backend call like original httpClient)
      providers:[
        AppService
      ],
    });
    appService = TestBed.get(AppService);
    httpTestingController = TestBed.get(HttpTestingController);

  })

  it("Should return all courses", ()=>{
    let allCourses=[]; 
    allCourses= appService.findAllCourses();
    console.log(allCourses);
    expect(allCourses).toBeTruthy('No courses Returned');
    
   
    const req = httpTestingController.expectOne('/el/signup');
    expect(req.request.method).toEqual("GET");
    req.flush({payload: [{id: 10, name:"Bhaegav"}, {id: 11, name:"Bhaegav Ram"}]});
  });

});